import { cn } from "@/lib/utils";
import {forwardRef} from 'react'

const Image = forwardRef(({ className, ...props }, ref) => (
  <img ref={ref} className={cn("shrink-0 bg-border", className)} {...props} />
));

Image.displayName = Image;

export { Image };
