import React from 'react';
import { X, Mail, Phone, MoreHorizontal, MessageSquare, ArrowRight, Plus, Check, Loader2, History } from 'lucide-react';

interface Lead {
  id: number;
  name: string;
  title: string;
  company: string;
  email: string;
  avatar?: string;
}

interface LeadDetailSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  lead: Lead | null;
}

export default function LeadDetailSidebar({ isOpen, onClose, lead }: LeadDetailSidebarProps) {
  if (!isOpen || !lead) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.headerLeft}>
            <button onClick={onClose} style={styles.closeButton}>
              <X size={20} />
            </button>
            <h2 style={styles.headerTitle}>Lead Detail</h2>
          </div>
          <button style={styles.viewDetailsBtn}>View Lead Details</button>
        </div>

        <div style={styles.scrollContent}>
          {/* Profile Section */}
          <div style={styles.profileSection}>
            <div style={styles.profileHeader}>
              {/* Using a placeholder if avatar is missing to match the clean look */}
              <img 
                src={lead.avatar || `https://ui-avatars.com/api/?name=${lead.name}&background=0D8ABC&color=fff`} 
                alt={lead.name} 
                style={styles.avatar} 
              />
              <div style={styles.profileInfo}>
                <h3 style={styles.profileName}>{lead.name}</h3>
                <div style={styles.profileEmail}>{lead.email}</div>
              </div>
              <div style={styles.actionButtons}>
                <button style={styles.iconBtn}><MessageSquare size={16} /></button>
                <button style={styles.iconBtn}><Mail size={16} /></button>
                <button style={styles.iconBtn}><Phone size={16} /></button>
                <button style={styles.iconBtn}><MoreHorizontal size={16} /></button>
              </div>
            </div>

            {/* Info Grid */}
            <div style={styles.infoGrid}>
              <div style={styles.infoItem}>
                <label style={styles.infoLabel}>Lead owner</label>
                <div style={styles.infoValue}>Floyd Miles</div>
              </div>
              <div style={styles.infoItem}>
                <label style={styles.infoLabel}>Location</label>
                <div style={styles.infoValue}>Toledo</div>
              </div>
              <div style={styles.infoItem}>
                <label style={styles.infoLabel}>Referral Partner</label>
                <div style={styles.infoValue}>Jennifer Winget</div>
              </div>
              <div style={styles.infoItem}>
                <label style={styles.infoLabel}>Annual Income</label>
                <div style={styles.infoValue}>NZ$10,000</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div style={styles.progressSection}>
              <div style={styles.progressHeader}>
                <div style={styles.progressTitle}>
                  <Loader2 size={16} style={styles.spinnerIcon} />
                  <span>Progress</span>
                </div>
                <span style={styles.progressPercent}>76% completed</span>
              </div>
              <div style={styles.progressBarContainer}>
                <div style={styles.progressBarFill}></div>
                <div style={styles.progressBarKnob}></div>
              </div>
            </div>
          </div>

          <div style={styles.divider}></div>

          {/* Latest Activities */}
          <div style={styles.section}>
            <div style={styles.sectionHeader}>
              <div style={styles.sectionTitleRow}>
                <h4 style={styles.sectionTitle}>Latest Activities</h4>
                <span style={styles.badgeYellow}>3</span>
              </div>
              <button style={styles.linkButton}>
                <History size={14} /> View All Activity
              </button>
            </div>

            <div style={styles.timeline}>
              <div style={styles.timelineLine}></div>
              
              {/* Activity 1 */}
              <div style={styles.timelineItem}>
                <div style={styles.timelineIconContainer}>
                   <div style={{...styles.timelineIcon, backgroundColor: '#F3F4F6'}}>
                      <MessageSquare size={14} color="#111" />
                   </div>
                </div>
                <div style={styles.timelineContent}>
                  <div style={styles.activityText}>
                    <span style={styles.boldText}>Eleanor Pena</span> tagged you in a comment
                  </div>
                  <div style={styles.activityTime}>Today 12:00 PM</div>
                  <div style={styles.statusBadge}>
                    <div style={styles.checkCircle}><Check size={10} color="white" /></div> 
                    Accepted
                  </div>
                </div>
              </div>

              {/* Activity 2 */}
              <div style={styles.timelineItem}>
                <div style={styles.timelineIconContainer}>
                   <div style={{...styles.timelineIcon, backgroundColor: '#fff', border: '1px solid #eee'}}>
                      <Loader2 size={14} color="#111" className="spin" />
                   </div>
                </div>
                <div style={styles.timelineContent}>
                  <div style={styles.activityText}>
                    <span style={styles.boldText}>Eleanor Pena</span> shared deal progress
                  </div>
                  <div style={styles.activityTime}>Today 12:00 PM</div>
                  <div style={styles.tagRow}>
                    <span style={styles.tagPurple}>New</span>
                    <ArrowRight size={12} color="#666" />
                    <span style={styles.tagGreen}>In progress</span>
                  </div>
                </div>
              </div>

              {/* Activity 3 */}
              <div style={styles.timelineItem}>
                <div style={styles.timelineIconContainer}>
                   <div style={{...styles.timelineIcon, backgroundColor: '#F3F4F6'}}>
                      <MessageSquare size={14} color="#111" />
                   </div>
                </div>
                <div style={styles.timelineContent}>
                  <div style={styles.activityText}>
                    <span style={styles.boldText}>Eleanor Pena</span> commented on Documents update
                  </div>
                  <div style={styles.activityTime}>Today 12:00 PM</div>
                </div>
              </div>

            </div>
          </div>

          <div style={styles.divider}></div>

          {/* Notes Section */}
          <div style={styles.section}>
            <div style={styles.sectionHeader}>
              <div style={styles.sectionTitleRow}>
                <h4 style={styles.sectionTitle}>Notes</h4>
                <span style={styles.badgeYellow}>4</span>
              </div>
              <button style={styles.addNoteButton}>
                <Plus size={14} /> Add Note
              </button>
            </div>

            <div style={styles.noteCard}>
              <div style={styles.noteHeader}>
                 <div style={styles.noteAuthorRow}>
                    <div style={styles.noteIcon}>
                        <div style={styles.noteLine}></div>
                    </div>
                    <span style={styles.boldText}>Note by Eleanor Pena</span>
                 </div>
                 <span style={styles.activityTime}>Today 12:00 PM</span>
              </div>
              <p style={styles.noteBody}>
                All loan documents have been sent, and most have been approved and submitted for review.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  container: {
    width: '440px',
    height: '100%',
    backgroundColor: '#fff',
    boxShadow: '-4px 0 15px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    animation: 'slideIn 0.3s ease-out',
  },
  header: {
    padding: '16px 18px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #eee',
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  closeButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    color: '#666',
    display: 'flex',
  },
  headerTitle: {
    margin: 0,
    fontSize: '16px',
    fontWeight: 600,
  },
  viewDetailsBtn: {
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    padding: '6px 12px',
    fontSize: '11px',
    fontWeight: 500,
    borderRadius: '4px',
    cursor: 'pointer',
  },
  scrollContent: {
    flex: 1,
    overflowY: 'auto',
    paddingBottom: '18px',
  },
  profileSection: {
    padding: '18px',
  },
  profileHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '18px',
  },
  avatar: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    margin: '0 0 3px 0',
    fontSize: '14px',
    fontWeight: 600,
    color: '#111',
  },
  profileEmail: {
    color: '#666',
    fontSize: '12px',
  },
  actionButtons: {
    display: 'flex',
    gap: '6px',
  },
  iconBtn: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    border: '1px solid #eee',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#444',
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px 18px',
    border: '1px solid #eee',
    padding: '12px',
    borderRadius: '8px',
    marginBottom: '18px',
  },
  infoItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
  },
  infoLabel: {
    fontSize: '10px',
    color: '#666',
  },
  infoValue: {
    fontSize: '12px',
    fontWeight: 500,
    color: '#111',
  },
  progressSection: {
    border: '1px solid #eee',
    padding: '12px',
    borderRadius: '8px',
  },
  progressHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    fontSize: '12px',
  },
  progressTitle: {
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  spinnerIcon: {
    animation: 'spin 4s linear infinite',
  },
  progressPercent: {
    color: '#666',
  },
  progressBarContainer: {
    height: '8px',
    backgroundColor: '#E5FFF0',
    borderRadius: '4px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  progressBarFill: {
    width: '76%',
    height: '100%',
    backgroundColor: '#10B981', // Green
    borderRadius: '4px',
    // The striped pattern at the end
    backgroundImage: 'linear-gradient(45deg,rgba(255,255,255,.3) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.3) 50%,rgba(255,255,255,.3) 75%,transparent 75%,transparent)',
    backgroundSize: '8px 8px',
  },
  progressBarKnob: {
    width: '12px',
    height: '12px',
    backgroundColor: '#000',
    borderRadius: '50%',
    border: '2px solid #fff',
    position: 'absolute',
    left: '75%', 
    zIndex: 2,
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  },
  divider: {
    height: '1px',
    backgroundColor: '#eee',
    margin: '0',
  },
  section: {
    padding: '18px',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  sectionTitleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  sectionTitle: {
    margin: 0,
    fontSize: '13px',
    fontWeight: 600,
  },
  badgeYellow: {
    backgroundColor: '#FDE047',
    fontSize: '9px',
    fontWeight: 'bold',
    padding: '2px 6px',
    borderRadius: '12px',
  },
  linkButton: {
    background: 'none',
    border: 'none',
    color: '#111',
    fontSize: '11px',
    fontWeight: 500,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  addNoteButton: {
    background: 'none',
    border: 'none',
    color: '#111',
    fontSize: '11px',
    fontWeight: 600,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '3px',
  },
  timeline: {
    position: 'relative',
    paddingLeft: '10px',
  },
  timelineLine: {
    position: 'absolute',
    left: '18px',
    top: '20px',
    bottom: '0',
    width: '1px',
    backgroundColor: '#E5E7EB',
  },
  timelineItem: {
    display: 'flex',
    gap: '12px',
    marginBottom: '22px',
    position: 'relative',
    zIndex: 1,
  },
  timelineIconContainer: {
    width: '36px',
    display: 'flex',
    justifyContent: 'center',
  },
  timelineIcon: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '3px solid #fff', 
  },
  timelineContent: {
    flex: 1,
    paddingTop: '3px',
  },
  activityText: {
    fontSize: '12px',
    color: '#111',
    marginBottom: '3px',
    lineHeight: '1.4',
  },
  boldText: {
    fontWeight: 600,
  },
  activityTime: {
    fontSize: '10px',
    color: '#9CA3AF',
    marginBottom: '6px',
  },
  statusBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '11px',
    fontWeight: 500,
    color: '#111',
    marginTop: '3px',
  },
  checkCircle: {
    width: '14px',
    height: '14px',
    backgroundColor: '#10B981',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginTop: '3px',
  },
  tagPurple: {
    backgroundColor: '#E0E7FF',
    color: '#4338CA',
    fontSize: '10px',
    fontWeight: 500,
    padding: '1px 6px',
    borderRadius: '4px',
  },
  tagGreen: {
    backgroundColor: '#DCFCE7',
    color: '#166534',
    fontSize: '10px',
    fontWeight: 500,
    padding: '1px 6px',
    borderRadius: '4px',
  },
  noteCard: {
    border: '1px solid #eee',
    borderRadius: '8px',
    padding: '12px',
  },
  noteHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  noteAuthorRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '12px',
  },
  noteIcon: {
    width: '18px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noteLine: {
    width: '12px',
    height: '2px',
    backgroundColor: '#111',
    boxShadow: '0 3px 0 #111, 0 -3px 0 #111',
  },
  noteBody: {
    fontSize: '12px',
    color: '#4B5563',
    lineHeight: '1.5',
    margin: 0,
  }
};