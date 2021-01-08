import React from 'react';
export interface Record {
    id: string;
    name: string;
    modifiedDate: string;
    size: number;
    section: string | null;
    link: string;
    [key: string]: string | number | null;
}
interface Directory {
    name: string;
    files: Array<Record>;
    [key: string]: string | Array<Record>;
}
export interface Directories {
    [key: string]: Directory;
}
export interface Props {
    /** Directories */
    directories: Directories;
    /**
     * DMS Management Link - direct link to the
     * parent folder in the DMS
     */
    dmsLink?: string;
    /**
     * Card header - shows main "Files" header (with DMS link, if applicable)
     */
    showHeader?: boolean;
    /**
     * Selected Files
     */
    selectedFiles?: Array<Record>;
    /**
     * Selection handler
     */
    onSelect?(selectedFiles: Array<Record>): void;
    readOnly?: boolean;
}
/**
 *
 * This component displays files and directories from
 * a Document Management System (DMS) parent directory
 * (or other similar endpoint).
 *
 * Optionally, it can be used as a file selector for forms.
 *
 * To-do: Display selected files that were removed from DMS
 *
 */
declare const Files: React.FC<Props>;
export default Files;
//# sourceMappingURL=index.d.ts.map