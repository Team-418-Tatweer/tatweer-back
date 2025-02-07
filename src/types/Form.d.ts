// Define the allowed form element types
declare type FormElementsT = "text" | "textarea" | "radio" | "checkbox" | "option";

// Interface representing the options for elements like radio, checkbox, or select fields
declare interface FormOptionsI {
    label: string;  // The display label for the option
    value: string;  // The value of the option when selected
}

// Interface representing individual form elements such as input fields
declare interface FormElementsI {
    id: string;  
    label: string;  // Label displayed for the element
    type: FormElementsT;  // Type of the form element (e.g., text, checkbox, radio, etc.)
    required: boolean;  // Whether the form element is required or optional
    options?: FormOptionsI[];  // Optional list of options for elements like radio or checkbox
}

// Interface representing the structure of a form
declare interface IForm {
    name: string;  // Name of the form
    elements: FormElementsI[];  // Array of form elements
    active: boolean;  // Boolean to indicate whether the form is active or not
}

// Define the possible response types for form answers
declare type ResponseAnswerT = string | number | boolean | null | undefined | Date | FormOptionsI[];

// Interface representing the user's response to each form element
declare interface FormResponseElementI {
    elementType: FormElementsT;  // The type of the element the user is responding to
    answer: ResponseAnswerT;  // The answer provided by the user for this element
}

// Interface representing a full form response by a user
declare interface FormResponseI {
    user: Types.ObjectId;  // ID of the user submitting the form
    form: Types.ObjectId;  // ID of the form being submitted
    elements: FormResponseElementI[];  // Array of responses for each form element
}
