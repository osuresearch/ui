import React from "react";
import Icon from "../../generic/Icon";

export interface Props {
  /** TO addresses */
  to: string | string[];

  /** CC addresses */
  cc?: string | string[];

  /** BCC addresses */
  bcc?: string | string[];

  /** Email subject */
  subject?: string;

  /** Email body */
  body?: string;
}

function addressesToString(addresses: string | string[]) {
  if (Array.isArray(addresses)) {
    return addresses.join(";");
  }

  return addresses;
}

/**
 * Creates an email link with an icon, optionally prefilled with content.
 *
 * If the component has no children the `to` address will be displayed.
 */
const EmailLink: React.FC<Props> = ({
  children,
  to,
  cc,
  bcc,
  subject,
  body,
}) => {
  const params: string[] = [];
  if (cc) params.push("cc=" + addressesToString(cc));
  if (bcc) params.push("bcc=" + addressesToString(bcc));
  if (subject) params.push("subject=" + encodeURIComponent(subject));
  if (body) params.push("body=" + encodeURIComponent(body));

  let mailto = "mailto:" + addressesToString(to);
  if (params.length > 0) {
    mailto += "?" + params.join("&");
  }

  return (
    <a className="email-link" href={mailto} rel="noopener noreferrer">
      <span className="sr-only">send an email to </span>

      {React.Children.count(children) > 0 && children}
      {React.Children.count(children) < 1 && to}

      <Icon name="envelope-o" />
    </a>
  );
};

export default EmailLink;
