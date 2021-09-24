
export interface IMessage {
    buttons: string;
    caption: string;
    defaultbutton: string;
    icon: string;
    message: string;
    originAppName: string;
    originFormName: string;
}

export interface IMessageOptions {
    icon?: string;
    defaultValue?: string;
    indexDefaultButton?: number;
    timer?: boolean;
}
