import React from "react";

import { Icon } from "../../..";

import { MIMETypes } from "../../../MIMETypes";


export function getMIMEType(ext: string) {
    for (const key in MIMETypes) {
        const value: string[] = MIMETypes[key as keyof object];
        if (value.includes(ext)) {
            return key;
        }
    }
}

export function getIcon(nameSplits: string[]) {
    if (nameSplits) {
        if (nameSplits.length <= 1) {
            return <Icon name="file-o" />;
        } else {
            const mimeType = getMIMEType(nameSplits[nameSplits.length - 1]);
            if (mimeType) {
                const type = mimeType.split("/")[0];
                if (type === "audio") {
                    return <Icon name="file-audio-o" />;
                }
                if (type === "image") {
                    return <Icon name="file-image-o" />;
                }
                if (type === "video") {
                    return <Icon name="file-video-o" />;
                }
                if (type === "text") {
                    return <Icon name="file-text-o" />;
                }
                if (mimeType === "application/pdf") {
                    return <Icon name="file-pdf-o" />;
                }
                if (mimeType === "application/msword") {
                    return <Icon name="file-word-o" />;
                } else {
                    return <Icon name="file-o" />;
                }
            } else {
                return <Icon name="file-o" />;
            }
        }
    }
}