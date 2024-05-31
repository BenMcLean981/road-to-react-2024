import {
  HTMLInputTypeAttribute,
  PropsWithChildren,
  useEffect,
  useRef,
} from "react";

export type InputWithLabelProps = {
  value: string;
  onChange: (s: string) => void;
  isFocused?: boolean;
  type?: HTMLInputTypeAttribute;
};

export function InputWithLabel(props: PropsWithChildren<InputWithLabelProps>) {
  const { value, onChange, isFocused, type } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isFocused) {
      inputRef.current?.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label>
        {props.children}
        <input
          ref={inputRef}
          type={type}
          onChange={(e) => onChange(e.target.value)}
          value={value}
        />
      </label>
    </>
  );
}
