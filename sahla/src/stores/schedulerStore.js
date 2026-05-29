import { create } from 'zustand';
import { supabase } from '@/lib/supabase';

export const useSchedulerStore = create((set, get) => ({
  tasks: [],
  isLoading: false,
  error: null,

  fetchTasks: async () => {
    set({ isLoading: true, error: null });
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        set({ tasks: [], isLoading: false });
        return;
      }

      // User said the table is called "shedule" (schedule)
      const { data, error } = await supabase
        .from('shedule')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      set({ tasks: data || [], isLoading: false });
    } catch (error) {
      console.error('[Scheduler Store] Fetch error:', error);
      set({ error: error.message, isLoading: false });
    }
  },

  addTask: async (task) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const newTask = {
        ...task,
        user_id: user.id,
        // Ensure numbers are numbers, booleans are booleans
        estimatedHours: Number(task.estimatedHours),
        loggedHours: Number(task.loggedHours || 0),
        examSoon: Boolean(task.examSoon)
      };

      // Optimistic update
      set((state) => ({ tasks: [newTask, ...state.tasks] }));

      // Strip temporary ID for DB insert so Supabase can generate a UUID
      const { id, ...dbTask } = newTask;

      const { data, error } = await supabase
        .from('shedule')
        .insert([dbTask])
        .select()
        .single();

      if (error) throw error;

      // Update with the DB returned task (in case id or created_at changes)
      set((state) => ({
        tasks: state.tasks.map((t) => (t.id === task.id ? data : t)),
      }));
    } catch (error) {
      console.error('[Scheduler Store] Add task error:', error);
      // Revert optimistic update on error
      set((state) => ({ tasks: state.tasks.filter((t) => t.id !== task.id) }));
    }
  },

  updateTask: async (id, updates) => {
    try {
      // Optimistic update
      set((state) => ({
        tasks: state.tasks.map((t) => (t.id === id ? { ...t, ...updates } : t)),
      }));

      const { error } = await supabase
        .from('shedule')
        .update(updates)
        .eq('id', id);

      if (error) throw error;
    } catch (error) {
      console.error('[Scheduler Store] Update task error:', error);
      // Refetch to ensure consistency on error
      get().fetchTasks();
    }
  },

  deleteTask: async (id) => {
    try {
      // Optimistic update
      set((state) => ({
        tasks: state.tasks.filter((t) => t.id !== id),
      }));

      const { error } = await supabase
        .from('shedule')
        .delete()
        .eq('id', id);

      if (error) throw error;
    } catch (error) {
      console.error('[Scheduler Store] Delete task error:', error);
      // Refetch to ensure consistency on error
      get().fetchTasks();
    }
  },
}));
