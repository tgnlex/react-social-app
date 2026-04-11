import { useRouter } from 'next/navigation';

type Props = {
  id?: string;
  className?: string;
  children?: any;
  href: string;
};

function LinkBtn(props: Props) {
    'use client';
    const router = useRouter();
    return (
      <button type="button" id={props.id || "link-btn"} className={props.className || "btn"} onClick={() => router.push(props.href)}>
        {props.children}
      </button>
    )
}

export { LinkBtn };
