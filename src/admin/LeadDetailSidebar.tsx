import React from 'react';
import { X, Mail, Phone, MoreHorizontal, MessageSquare, ArrowRight, Plus, Check, Loader2, History, MapPin, Users, Calendar, DollarSign, Hotel, Sparkles } from 'lucide-react';
import { DataRequest } from '../utils/dataType';

interface LeadDetailSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  lead: DataRequest | null;
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
              <div 
                style={{...styles.avatarPlaceholder, backgroundColor: '#0D8ABC', width: '56px', height: '56px'}}
              >
                {lead.name.charAt(0).toUpperCase()}
              </div>
              <div style={styles.profileInfo}>
                <h3 style={styles.profileName}>{lead.name}</h3>
                <div style={styles.profileEmail}>{lead.email}</div>
              </div>
              <div style={styles.actionButtons}>
                <button style={styles.iconBtn}><MessageSquare size={18} /></button>
                <button style={styles.iconBtn}><Mail size={18} /></button>
                <button style={styles.iconBtn}><Phone size={18} /></button>
                <button style={styles.iconBtn}><MoreHorizontal size={18} /></button>
              </div>
            </div>

            {/* Trip Info Grid */}
            <div style={styles.infoGrid}>
              <div style={styles.infoItem}>
                <label style={styles.infoLabel}>
                  <MapPin size={14} style={{display: 'inline', marginRight: '4px'}} />
                  Destination
                </label>
                <div style={styles.infoValue}>{lead.destination}</div>
              </div>
              <div style={styles.infoItem}>
                <label style={styles.infoLabel}>
                  <Calendar size={14} style={{display: 'inline', marginRight: '4px'}} />
                  Duration
                </label>
                <div style={styles.infoValue}>{lead.tripDuration}</div>
              </div>
              <div style={styles.infoItem}>
                <label style={styles.infoLabel}>
                  <Users size={14} style={{display: 'inline', marginRight: '4px'}} />
                  Travellers
                </label>
                <div style={styles.infoValue}>{lead.numberOfTravellers}</div>
              </div>
              <div style={styles.infoItem}>
                <label style={styles.infoLabel}>
                  <DollarSign size={14} style={{display: 'inline', marginRight: '4px'}} />
                  Budget
                </label>
                <div style={styles.infoValue}>{lead.budget}</div>
              </div>
              <div style={styles.infoItem}>
                <label style={styles.infoLabel}>
                  <Calendar size={14} style={{display: 'inline', marginRight: '4px'}} />
                  Trip Dates
                </label>
                <div style={styles.infoValue}>{lead.dates}</div>
              </div>
              <div style={styles.infoItem}>
                <label style={styles.infoLabel}>
                  <Hotel size={14} style={{display: 'inline', marginRight: '4px'}} />
                  Hotel Pref.
                </label>
                <div style={styles.infoValue}>{lead.hotelPreference}</div>
              </div>
            </div>

            {/* Interests Section */}
            <div style={styles.interestsSection}>
              <div style={styles.sectionTitle}>
                <Sparkles size={16} style={{marginRight: '6px'}} />
                Interests
              </div>
              <div style={styles.interestsList}>
                {lead.interests.split(',').map((interest, index) => (
                  <div key={index} style={styles.interestItem}>
                    {interest.trim()}
                  </div>
                ))}
              </div>
            </div>

            {/* Reference Number */}
            <div style={styles.refSection}>
              <label style={styles.infoLabel}>Reference Number</label>
              <div style={styles.refValue}>{lead.refNumber}</div>
            </div>
          </div>

          <div style={styles.divider}></div>

          {/* Latest Activities */}
          

          <div style={styles.divider}></div>

          {/* Notes Section */}
          
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
    fontSize: '18px',
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
    fontSize: '16px',
    fontWeight: 600,
    color: '#111',
  },
  profileEmail: {
    color: '#666',
    fontSize: '13px',
  },
  actionButtons: {
    display: 'flex',
    gap: '6px',
  },
  iconBtn: {
    width: '32px',
    height: '32px',
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
    fontSize: '11px',
    color: '#666',
  },
  infoValue: {
    fontSize: '14px',
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
    fontSize: '14px',
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
    fontSize: '13px',
    color: '#111',
    marginBottom: '3px',
    lineHeight: '1.4',
  },
  boldText: {
    fontWeight: 600,
  },
  activityTime: {
    fontSize: '11px',
    color: '#9CA3AF',
    marginBottom: '6px',
  },
  statusBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '12px',
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
    fontSize: '11px',
    fontWeight: 500,
    padding: '2px 8px',
    borderRadius: '4px',
  },
  tagGreen: {
    backgroundColor: '#DCFCE7',
    color: '#166534',
    fontSize: '11px',
    fontWeight: 500,
    padding: '2px 8px',
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
    fontSize: '13px',
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
    fontSize: '13px',
    color: '#4B5563',
    lineHeight: '1.5',
    margin: 0,
  },
  avatarPlaceholder: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontWeight: 600,
    fontSize: '18px',
  },
  interestsSection: {
    border: '1px solid #eee',
    padding: '12px',
    borderRadius: '8px',
    marginBottom: '12px',
    marginTop: '12px',
  },
  interestsList: {
    fontSize: '13px',
    color: '#4B5563',
    marginTop: '8px',
    lineHeight: '1.5',
  },
  interestItem: {
    fontSize: '13px',
    color: '#4B5563',
    padding: '8px 0',
    borderBottom: '1px solid #f0f0f0',
  },
  refSection: {
    padding: '12px',
    backgroundColor: '#f9fafb',
    borderRadius: '8px',
    marginTop: '12px',
  },
  refValue: {
    fontSize: '13px',
    fontWeight: 500,
    color: '#111',
    marginTop: '4px',
    fontFamily: 'monospace',
  }
};