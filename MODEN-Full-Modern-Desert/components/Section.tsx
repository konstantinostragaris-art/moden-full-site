'use client'
import clsx from 'clsx'
import * as React from 'react'

type Props = React.HTMLAttributes<HTMLDivElement> & {
container?: boolean
}

export default function Section({ className, container = true, ...props }: Props) {
return (
<section
{...props}
className={clsx(
// Βασικά χρώματα ανά theme
'text-neutral-900 dark:text-neutral-50',
// Τα περισσότερα sections έχουν light bg — δεν ορίζουμε bg εδώ για να μη «κλειδώνει»
className
)}
>
<div className={clsx(container && 'container mx-auto px-4 max-w-7xl')}>{props.children}</div>
</section>
)}
