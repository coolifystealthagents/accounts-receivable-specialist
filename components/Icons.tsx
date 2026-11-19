export function ArrowIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>; }
export function CheckIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>; }
export function SparkIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18" /></svg>; }

const WorkflowIconBase = ({ children }: { children: React.ReactNode }) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>;

export function DefineIcon() {
  return <WorkflowIconBase><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h3M15.5 16l1.5 1.5 3-3" /></WorkflowIconBase>;
}

export function DelegateIcon() {
  return <WorkflowIconBase><circle cx="8" cy="8" r="3" /><path d="M2.8 19a5.2 5.2 0 0 1 10.4 0M14 7h7m-3-3 3 3-3 3M21 17h-7m3-3-3 3 3 3" /></WorkflowIconBase>;
}

export function ImproveIcon() {
  return <WorkflowIconBase><path d="M4 20V5M4 20h17M7 16l4-4 3 2 6-7" /><path d="M16 7h4v4" /></WorkflowIconBase>;
}
