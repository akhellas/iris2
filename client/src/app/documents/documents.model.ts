export enum DocumentType {
    PermanentOrder,
    Order,
    Report,
    PersonalReport,
    Letter,
    DailyOrder,
    EgikliosOrder,
    Signal,
    FastDocument,
    AgencyNote,
    ConferenceOrder,
    ConferenceMinutes,
    Study,
    Rulebook,
    Manual,
    Laws,
    ReasoningReport,
    SuggestionReport,
    NDA,
    FEE,
    ES,
    PES,
    FES,
    Fax,
    Email
}

export type DocumentTypeName = 
    'Διαταγή Μονίμου Ισχύος (ΔΜΙ)' |
    'Διαταγή' |
    'Αναφορά' |
    'Ατομική Αναφορά' |
    'Επιστολή' |
    'Ημερήσια Διαταγή' |
    'Εγκύκλιος Διαταγή' |
    'Σήμα' |
    'Ταχύ Έγγραφο' |
    'Υπηρεσιακό Σημείωμα' |
    'Διαταγή Συγκλήσεως Συσκέψεως' |
    '' |
    '' |
    '' |
    '' |
    '' |
    '' |
    '' |
    '' |
    '' |
    '' |
    '' |
    '' |
    '' |
    '';


export enum DocumentPriority {Routine, Urgent, UltraUrgent, Immediate, Flash}
export enum DocumentClassification {UNCLASSIFIED, RESTRICTED, CONFIDENTIAL, SECRET, AGENCY_NOTE}

export class Draft {
    public type: DocumentType;
    public classification: DocumentClassification;
    public priority: DocumentPriority;
}