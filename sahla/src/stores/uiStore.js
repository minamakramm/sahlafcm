import { create } from 'zustand'

export const useUiStore = create((set) => ({
  // Sidebar
  isSidebarOpen: false,
  toggleSidebar: () => set((s) => ({ isSidebarOpen: !s.isSidebarOpen })),
  openSidebar: () => set({ isSidebarOpen: true }),
  closeSidebar: () => set({ isSidebarOpen: false }),

  // Mobile menu
  isMobileMenuOpen: false,
  toggleMobileMenu: () => set((s) => ({ isMobileMenuOpen: !s.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),

  // Search
  isSearchOpen: false,
  searchQuery: '',
  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false, searchQuery: '' }),
  setSearchQuery: (query) => set({ searchQuery: query }),

  // Modal
  activeModal: null,
  modalData: null,
  openModal: (modalId, data = null) => set({ activeModal: modalId, modalData: data }),
  closeModal: () => set({ activeModal: null, modalData: null }),

  // Loading overlay
  isGlobalLoading: false,
  globalLoadingMessage: '',
  showGlobalLoading: (message = '') =>
    set({ isGlobalLoading: true, globalLoadingMessage: message }),
  hideGlobalLoading: () =>
    set({ isGlobalLoading: false, globalLoadingMessage: '' }),

  // Toast queue (managed by react-hot-toast, but we track count for UI positioning)
  activeToasts: 0,
  incrementToasts: () => set((s) => ({ activeToasts: s.activeToasts + 1 })),
  decrementToasts: () => set((s) => ({ activeToasts: Math.max(0, s.activeToasts - 1) })),
}))
