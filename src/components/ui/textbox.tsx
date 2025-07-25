import { cn } from "@/utils/lib/cn";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

export const TextBoxVariants = cva(
	"w-full rounded-md border focus:ring-2 focus:outline-none text-sm disabled:cursor-not-allowed disabled:opacity-50",
	{
		variants: {
			variants: {
				primary:
					"bg-[hsl(var(--primary))]/5 placeholder:text-[hsl(var(--secondary-foreground))]/60 text-white border-white/20 focus:ring-[hsl(var(--primary))]",
			},
			sizes: {
				sm: "h-32 p-5",
			},
		},
		defaultVariants: {
			variants: "primary",
			sizes: "sm",
		},
	},
);

export interface TextBoxProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
		VariantProps<typeof TextBoxVariants> {
	errorMessage?: string;
	iserror?: boolean;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextBoxProps>(
	(
		{ className, sizes, variants, errorMessage, iserror, name, ...props },
		ref,
	) => {
		return (
			<div className="flex flex-col gap-1">
				<label
					htmlFor=""
					className="text-sm text-[hsl(var(--primary))]"
				>
					{name}
				</label>
				<textarea
					ref={ref}
					className={cn(
						"",
						TextBoxVariants({ sizes, variants }),
						className,
					)}
					required
					name={name}
					{...props}
				/>
				{errorMessage && (
					<p
						className={cn(
							"text-xs flex flex-row gap-1",
							iserror
								? "text-red-400"
								: "text-[hsl(var(--primary))]/30",
						)}
					>
						{iserror && <FaExclamationTriangle />}
						{errorMessage}
					</p>
				)}
			</div>
		);
	},
);

TextArea.displayName = "TextArea";
