import { LucideIcon } from 'lucide-react';
import { cva, type RecipeVariantProps } from '@styles/css';

const badge = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.625rem',
    width: 'fit-content',
    borderRadius: '1rem',
    background: { base: 'button', _hover: 'button.hovered' },
    color: 'white',
    fontWeight: '700',
  },
  variants: {
    size: {
      sm: {
        fontSize: '0.75rem',
        paddingInline: '0.5rem',
        paddingBlock: '0.25rem',
      },
      md: {
        paddingInline: '0.75rem',
        paddingBlock: '0.5rem',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export type BadgeProps = RecipeVariantProps<typeof badge> & {
  content: string;
  Icon?: LucideIcon;
};

export function Badge(props: BadgeProps) {
  const { size: _size, Icon } = props;
  const size = _size ?? 'md';
  return (
    <div className={badge({ size })}>
      {!!Icon && <Icon size={size === 'md' ? 24 : 12} />}
      <div>{props.content}</div>
    </div>
  );
}
