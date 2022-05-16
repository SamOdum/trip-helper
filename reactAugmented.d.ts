import { AriaAttributes } from "react";

declare module "react" {
  // interface DivHTMLAttributes<T>
  // extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    lat?: number;
    lng?: number;
  }
}
