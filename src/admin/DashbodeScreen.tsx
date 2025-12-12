import React, { useState } from 'react';
import { Search, Filter, ChevronDown, Calendar, Download, MoreHorizontal, Grid3x3, Bell, Gift, User } from 'lucide-react';
import LeadDetailSidebar from './LeadDetailSidebar'; // Make sure the path matches where you saved the file

// Defined interface to share between files (in a real app, put this in a types.ts file)
interface Lead {
  id: number;
  name: string;
  title: string;
  company: string;
  phone: string;
  phoneVerified?: boolean;
  email: string;
  emailVerified?: boolean;
  addedBy: string;
  addedByEmail: string;
  list: string;
  avatar?: string;
  initials?: string;
  bgColor?: string;
}

export default function DashboardScreen() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null); // State for the sidebar
  const totalPages = 3;

  const leads: Lead[] = [
    {
      id: 1,
      name: 'Lindsay Norman',
      title: 'Team Lead',
      company: 'Walmart',
      phone: '174-000-9546',
      phoneVerified: true,
      email: 'haley_abbott@hotmail.com',
      emailVerified: true,
      addedBy: 'Anmol Arora',
      addedByEmail: 'anmol@illuminz.com',
      list: 'Website Dev.',
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    {
      id: 2,
      name: 'Athar Malakooti',
      title: 'Director of Marketing',
      company: 'Amazon',
      phone: '152-986-3774',
      phoneVerified: true,
      email: 'schulist.jayden@herzog.io',
      addedBy: 'Anmol Arora',
      addedByEmail: 'anmol@illuminz.com',
      list: 'Leads',
      initials: 'AM',
      bgColor: '#FFE5E5'
    },
    {
      id: 3,
      name: 'Bonelwa Ngqawana',
      title: 'Manager',
      company: 'Exxon Mobil',
      phone: '094-451-4647',
      email: 'sam_kuhic@gmail.com',
      addedBy: 'Sanchit Thakur',
      addedByEmail: 'sanchitthakur@illuminz.com',
      list: 'App Development',
      avatar: 'https://i.pravatar.cc/150?img=2'
    },
    {
      id: 4,
      name: 'Cvita Doleschall',
      title: 'Assistant Manager',
      company: 'Apple',
      phone: '631-513-7853',
      email: 'torp_neha@yahoo.com',
      addedBy: 'Anmol Arora',
      addedByEmail: 'anmol@illuminz.com',
      list: 'Leads',
      avatar: 'https://i.pravatar.cc/150?img=3'
    },
    {
      id: 5,
      name: 'Gladys Kanyinda',
      title: 'Executive',
      company: 'CVS Health',
      phone: '267-214-3752',
      phoneVerified: true,
      email: 'dare_ernest@leffler.io',
      emailVerified: true,
      addedBy: 'Aman Mann',
      addedByEmail: 'aman.m@illuminz.com',
      list: 'Marketing',
      avatar: 'https://i.pravatar.cc/150?img=4'
    },
    {
      id: 6,
      name: 'Kip Collison',
      title: 'Director',
      company: 'Berkshire Hath...',
      phone: '044-000-4230',
      email: 'keira_hahn@yahoo.com',
      addedBy: 'Ankur',
      addedByEmail: 'ankur@illuminz.com',
      list: 'Real Estate',
      initials: 'KC',
      bgColor: '#E5F0FF'
    },
    {
      id: 7,
      name: 'Mattie Blooman',
      title: 'Coordinator',
      company: 'UnitedHealth G...',
      phone: '381-178-2619',
      email: 'mattieb@uhg.com',
      addedBy: 'Anmol Arora',
      addedByEmail: 'anmol@illuminz.com',
      list: 'Design Leads',
      initials: 'MB',
      bgColor: '#FFF4E5'
    },
    {
      id: 8,
      name: 'Veerle de Bree',
      title: 'Administrator',
      company: 'McKesson',
      phone: '527-755-4241',
      email: 'matilda_daugherty@hotmail.com',
      addedBy: 'Anmol Arora',
      addedByEmail: 'anmol@illuminz.com',
      list: 'Leads',
      avatar: 'https://i.pravatar.cc/150?img=5'
    },
    {
      id: 9,
      name: 'Yi Hanying',
      title: 'Controller',
      company: 'Walmart',
      phone: '678-168-6894',
      email: 'claudine.ebert@leslie.ca',
      addedBy: 'Anmol Arora',
      addedByEmail: 'anmol@illuminz.com',
      list: 'Leads',
      initials: 'YH',
      bgColor: '#E5FFF0'
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <div style={styles.logoContainer}>
          <div style={styles.logoBox}>
            <div style={styles.logoBg}>
              <span style={styles.logoText}>K</span>
            </div>
            <span style={styles.logoName}>Kaspr</span>
          </div>
        </div>

        <nav style={styles.nav}>
          <div style={styles.navList}>
            <a href="#" style={styles.navLink}>
              <Grid3x3 size={20} />
              <span>Dashboard</span>
            </a>
            <a href="#" style={styles.navLink}>
              <Search size={20} />
              <span>Search</span>
            </a>
            <a href="#" style={styles.navLinkActive}>
              <Filter size={20} />
              <span style={styles.navLinkActiveText}>Leads</span>
            </a>
            <a href="#" style={styles.navLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span>Organization</span>
            </a>
            <a href="#" style={styles.navLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="9" y1="3" x2="9" y2="21"></line>
              </svg>
              <span>Workflows</span>
            </a>
            <a href="#" style={styles.navLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
              <span>Billing</span>
            </a>
            <a href="#" style={styles.navLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M12 1v6m0 6v6m5.196-13.196l-4.242 4.242m0 6.364l-4.242 4.242m13.196-5.196l-6 0m-6 0l-6 0m13.196 5.196l-4.242-4.242m0-6.364l-4.242-4.242"></path>
              </svg>
              <span>Settings</span>
            </a>
          </div>
        </nav>
      </div>

      <div style={styles.mainContent}>
        <header style={styles.header}>
          <div style={styles.headerContent}>
            <h1 style={styles.headerTitle}>Leads</h1>
            
            <div style={styles.headerRight}>
              <button style={styles.earnButton}>
                <Gift size={18} />
                <span style={styles.earnButtonText}>Earn credits</span>
              </button>
              
              <div style={styles.creditsBox}>
                <div style={styles.creditsBadge}>
                  <span style={styles.creditsText}>C</span>
                </div>
                <span style={styles.creditsLabel}>10 Credits</span>
              </div>
              
              <div style={styles.notificationWrapper}>
                <Bell size={20} style={styles.notificationIcon} />
                <span style={styles.notificationBadge}>3</span>
              </div>
              
              <div style={styles.userInfo}>
                <User size={20} style={styles.userIcon} />
                <div>
                  <div style={styles.userName}>Miglena Tadic</div>
                  <div style={styles.userBadge}>PRO USER</div>
                </div>
                <ChevronDown size={16} style={styles.userChevron} />
              </div>
            </div>
          </div>
        </header>

        <div style={styles.toolbar}>
          <div style={styles.toolbarContent}>
            <div style={styles.toolbarLeft}>
              <button style={styles.filterButton}>
                <Filter size={16} />
                <span style={styles.filterButtonText}>All Leads</span>
                <ChevronDown size={16} />
              </button>
              
              <button style={styles.filterButton}>
                <User size={16} />
                <span style={styles.filterButtonText}>Added by</span>
                <ChevronDown size={16} />
              </button>
            </div>
            
            <div style={styles.toolbarRight}>
              <div style={styles.searchWrapper}>
                <Search size={18} style={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Search in the list..."
                  style={styles.searchInput}
                />
              </div>
              
              <button style={styles.calendarButton}>
                <Calendar size={18} />
              </button>
            </div>
          </div>
        </div>

        <div style={styles.contentArea}>
          <div style={styles.tableWrapper}>
            <div style={styles.tableHeader}>
              <div style={styles.tableHeaderLeft}>
                <span style={styles.leadsCount}>24 Leads</span>
                <button style={styles.sortButton}>
                  <span>Sort by Date</span>
                  <ChevronDown size={16} />
                </button>
              </div>
              
              <div style={styles.tableHeaderRight}>
                <span style={styles.resultsText}>Results 30</span>
                <ChevronDown size={16} style={styles.resultsIcon} />
                <span style={styles.paginationText}>1 of 3 Pages</span>
                <div style={styles.arrowButtons}>
                  <button style={styles.arrowButton}>
                    <ChevronDown size={18} style={styles.arrowLeft} />
                  </button>
                  <button style={styles.arrowButton}>
                    <ChevronDown size={18} style={styles.arrowRight} />
                  </button>
                </div>
                <button style={styles.gridButton}>
                  <Grid3x3 size={18} />
                </button>
                <button style={styles.exportButton}>
                  <span>Export</span>
                  <ChevronDown size={16} />
                </button>
                <button style={styles.moreButton}>
                  <MoreHorizontal size={18} />
                </button>
              </div>
            </div>

            <div style={styles.tableScroll}>
              <table style={styles.table}>
                <thead style={styles.tableHead}>
                  <tr>
                    <th style={styles.tableHeaderCell}>
                      <input type="checkbox" style={styles.checkbox} />
                    </th>
                    <th style={styles.tableHeaderCellText}>Name</th>
                    <th style={styles.tableHeaderCellText}>Company</th>
                    <th style={styles.tableHeaderCellText}>Phone</th>
                    <th style={styles.tableHeaderCellText}>Email</th>
                    <th style={styles.tableHeaderCellText}>Added By</th>
                    <th style={styles.tableHeaderCellText}>List</th>
                  </tr>
                </thead>
                <tbody style={styles.tableBody}>
                  {leads.map((lead) => (
                    <tr 
                      key={lead.id} 
                      style={styles.tableRow}
                      onClick={() => setSelectedLead(lead)} // Click handler to open sidebar
                    >
                      <td style={styles.tableCell} onClick={(e) => e.stopPropagation()}> 
                        <input type="checkbox" style={styles.checkbox} />
                      </td>
                      <td style={styles.tableCell}>
                        <div style={styles.nameCell}>
                          {lead.avatar ? (
                            <img src={lead.avatar} alt={lead.name} style={styles.avatar} />
                          ) : (
                            <div 
                              style={{...styles.avatarPlaceholder, backgroundColor: lead.bgColor}}
                            >
                              {lead.initials}
                            </div>
                          )}
                          <div>
                            <div style={styles.leadName}>{lead.name}</div>
                            <div style={styles.leadTitle}>{lead.title}</div>
                          </div>
                        </div>
                      </td>
                      <td style={styles.tableCell}>{lead.company}</td>
                      <td style={styles.tableCell}>
                        <div style={styles.verificationCell}>
                          <span style={styles.cellText}>{lead.phone}</span>
                          {lead.phoneVerified && (
                            <span style={styles.verificationBadge}>✓</span>
                          )}
                        </div>
                      </td>
                      <td style={styles.tableCell}>
                        <div style={styles.verificationCell}>
                          <span style={styles.cellText}>{lead.email}</span>
                          {lead.emailVerified && (
                            <span style={styles.verificationBadge}>✓</span>
                          )}
                        </div>
                      </td>
                      <td style={styles.tableCell}>
                        <div>
                          <div style={styles.cellText}>{lead.addedBy}</div>
                          <div style={styles.cellEmail}>{lead.addedByEmail}</div>
                        </div>
                      </td>
                      <td style={styles.tableCell}>{lead.list}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={styles.pagination}>
              <button 
                style={styles.paginationButton}
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              >
                <ChevronDown size={18} style={styles.paginationChevronLeft} />
              </button>
              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  style={{
                    ...styles.pageButton,
                    ...(page === currentPage ? styles.pageButtonActive : styles.pageButtonInactive)
                  }}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
              <button 
                style={styles.paginationButton}
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              >
                <ChevronDown size={18} style={styles.paginationChevronRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* The Sidebar Component */}
      <LeadDetailSidebar 
        isOpen={!!selectedLead} 
        onClose={() => setSelectedLead(null)} 
        lead={selectedLead} 
      />
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#FCFCFC',
  },
  sidebar: {
    width: '256px',
    backgroundColor: 'transparent',
    // borderRight: '1px solid #e5e7eb',
  },
  logoContainer: {
    padding: '16px',
    // borderBottom: '1px solid #e5e7eb',
  },
  logoBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  logoBg: {
    width: '32px',
    height: '32px',
    backgroundColor: '#9333ea',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '12px',
  },
  logoName: {
    fontWeight: 600,
    fontSize: '16px',
  },
  nav: {
    padding: '16px',
  },
  navList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '8px 12px',
    color: '#374151',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.2s',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent',
  },
  navLinkActive: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '8px 12px',
    color: '#3127F5',
    backgroundColor: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 4px',
  },
  navLinkActiveText: {
    fontWeight: 500,
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: 'transparent',
    // borderBottom: '1px solid #e5e7eb',
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingTop: '16px',
    paddingBottom: '16px',
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#111827',
    margin: 0,
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  earnButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '8px',
    paddingBottom: '8px',
    color: '#9333ea',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  earnButtonText: {
    fontSize: '12px',
    fontWeight: 500,
  },
  creditsBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    paddingLeft: '12px',
    paddingRight: '12px',
    paddingTop: '8px',
    paddingBottom: '8px',
    backgroundColor: '#f3f4f6',
    borderRadius: '8px',
  },
  creditsBadge: {
    width: '24px',
    height: '24px',
    backgroundColor: '#3b82f6',
    borderRadius: '9999px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  creditsText: {
    color: '#ffffff',
    fontSize: '10px',
    fontWeight: 500,
  },
  creditsLabel: {
    fontSize: '12px',
    fontWeight: 500,
  },
  notificationWrapper: {
    position: 'relative',
  },
  notificationIcon: {
    color: '#4b5563',
  },
  notificationBadge: {
    position: 'absolute',
    top: '-4px',
    right: '-4px',
    width: '16px',
    height: '16px',
    backgroundColor: '#ec4899',
    borderRadius: '9999px',
    color: '#ffffff',
    fontSize: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
  },
  userIcon: {
    color: '#4b5563',
  },
  userName: {
    fontSize: '12px',
    fontWeight: 500,
  },
  userBadge: {
    fontSize: '10px',
    color: '#6b7280',
  },
  userChevron: {
    color: '#9ca3af',
  },
  toolbar: {
    backgroundColor: 'transparent',
    // borderBottom: '1px solid #e5e7eb',
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingTop: '16px',
    paddingBottom: '16px',
  },
  toolbarContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toolbarLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  toolbarRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  filterButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    paddingLeft: '12px',
    paddingRight: '12px',
    paddingTop: '8px',
    paddingBottom: '8px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 4px',
  },
  filterButtonText: {
    fontSize: '12px',
  },
  searchWrapper: {
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#9ca3af',
  },
  searchInput: {
    paddingLeft: '40px',
    paddingRight: '16px',
    paddingTop: '8px',
    paddingBottom: '8px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    width: '256px',
    fontSize: '13px',
    outline: 'none',
    backgroundColor: '#ffffff',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 4px',
  },
  calendarButton: {
    padding: '8px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 4px',
  },
  contentArea: {
    flex: 1,
    overflow: 'auto',
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingTop: '16px',
    paddingBottom: '16px',
  },
  tableWrapper: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 4px',
  },
  tableHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingTop: '16px',
    paddingBottom: '16px',
    borderBottom: '1px solid #e5e7eb',
  },
  tableHeaderLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  tableHeaderRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  leadsCount: {
    fontSize: '14px',
    fontWeight: 600,
  },
  sortButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '12px',
    color: '#4b5563',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  resultsText: {
    fontSize: '12px',
    color: '#4b5563',
  },
  resultsIcon: {
    color: '#9ca3af',
  },
  paginationText: {
    fontSize: '12px',
    color: '#4b5563',
  },
  arrowButtons: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  arrowButton: {
    padding: '4px',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  arrowLeft: {
    transform: 'rotate(90deg)',
  },
  arrowRight: {
    transform: 'rotate(-90deg)',
  },
  gridButton: {
    padding: '8px',
    backgroundColor: 'transparent',
    border: '1px solid #d1d5db',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 4px',
  },
  exportButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '8px',
    paddingBottom: '8px',
    backgroundColor: '#3127F5',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  moreButton: {
    padding: '8px',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  tableScroll: {
    overflowX: 'auto',
  },
  table: {
    width: '100%',
  },
  tableHead: {
    backgroundColor: '#f9fafb',
    borderBottom: '1px solid #e5e7eb',
  },
  tableHeaderCell: {
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingTop: '12px',
    paddingBottom: '12px',
    textAlign: 'left',
  },
  tableHeaderCellText: {
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingTop: '12px',
    paddingBottom: '12px',
    textAlign: 'left',
    fontSize: '10px',
    fontWeight: 500,
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  tableBody: {
    backgroundColor: '#ffffff',
    borderCollapse: 'collapse' as const,
  },
  tableRow: {
    borderBottom: '1px solid #e5e7eb',
    transition: 'background-color 0.2s',
    cursor: 'pointer', // Make row look clickable
  },
  tableCell: {
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingTop: '16px',
    paddingBottom: '16px',
    fontSize: '12px',
    color: '#111827',
  },
  checkbox: {
    borderRadius: '4px',
    borderColor: '#d1d5db',
  },
  nameCell: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '9999px',
  },
  avatarPlaceholder: {
    width: '40px',
    height: '40px',
    borderRadius: '9999px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: 500,
  },
  leadName: {
    fontWeight: 500,
    color: '#111827',
  },
  leadTitle: {
    fontSize: '11px',
    color: '#6b7280',
  },
  verificationCell: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  cellText: {
    fontSize: '12px',
    color: '#111827',
  },
  cellEmail: {
    fontSize: '10px',
    color: '#6b7280',
  },
  verificationBadge: {
    color: '#22c55e',
    fontSize: '10px',
  },
  pagination: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingTop: '16px',
    paddingBottom: '16px',
    borderTop: '1px solid #e5e7eb',
  },
  paginationButton: {
    padding: '8px',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    opacity: 1,
  },
  paginationChevronLeft: {
    transform: 'rotate(90deg)',
  },
  paginationChevronRight: {
    transform: 'rotate(-90deg)',
  },
  pageButton: {
    width: '32px',
    height: '32px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  pageButtonActive: {
    backgroundColor: '#9333ea',
    color: '#ffffff',
  },
  pageButtonInactive: {
    backgroundColor: 'transparent',
    color: '#374151',
  },
};