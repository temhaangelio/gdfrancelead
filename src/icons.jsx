const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
};

function Icon({ children }) {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" {...iconProps}>
      {children}
    </svg>
  );
}

export function DashboardIcon() {
  return (
    <Icon>
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </Icon>
  );
}

export function LeadsIcon() {
  return (
    <Icon>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </Icon>
  );
}

export function ReviewsIcon() {
  return (
    <Icon>
      <rect width="16" height="18" x="4" y="3" rx="2" />
      <path d="M9 7h6" />
      <path d="M9 12h6" />
      <path d="M9 17h3" />
      <path d="M7 7h.01" />
      <path d="M7 12h.01" />
      <path d="M7 17h.01" />
    </Icon>
  );
}

export function SmsIcon() {
  return (
    <Icon>
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
      <path d="M8 9h8" />
      <path d="M8 13h5" />
    </Icon>
  );
}

export function AutomationIcon() {
  return (
    <Icon>
      <path d="M4 7h6" />
      <path d="M14 7h6" />
      <path d="M4 17h6" />
      <path d="M14 17h6" />
      <circle cx="12" cy="7" r="2" />
      <circle cx="12" cy="17" r="2" />
      <path d="M12 9v6" />
    </Icon>
  );
}

export function AssignmentRulesIcon() {
  return (
    <Icon>
      <path d="M4 6h16" />
      <path d="M4 12h10" />
      <path d="M4 18h7" />
      <path d="M16 15l2 2 4-4" />
    </Icon>
  );
}

export function PrintIcon() {
  return (
    <Icon>
      <path d="M6 9V3h12v6" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 14h12v7H6z" />
    </Icon>
  );
}
