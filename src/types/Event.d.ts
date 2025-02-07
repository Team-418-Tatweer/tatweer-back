// Interface representing an event structure
declare interface EventI {
    name: string;               // Name of the event
    description: string;        // Brief description of the event
    start_date: Date;           // Date and time when the event starts
    end_date: Date;             // Date and time when the event ends
    location: string;           // Location where the event takes place
    image: string;              // URL or path to the event's image (e.g., banner or poster)
    roleId: Types.ObjectId;     // Role ID to define who can manage or access the event
    isHidden: boolean;          // Boolean to indicate if the event is hidden (e.g., not publicly visible)
}
