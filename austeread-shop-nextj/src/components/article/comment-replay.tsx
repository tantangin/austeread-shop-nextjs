import { DetailedHTMLProps, FormHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> & {};
export default function CommentReplay({ className = "" }: Props) {
  return (
    <form className={twMerge("mb-6", className)}>
      <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 ">
        <label htmlFor="comment" className="sr-only">
          Reply Comment
        </label>
        <textarea
          id="comment"
          rows={3}
          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
          placeholder="Write a comment..."
          required
          defaultValue={""}
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary  hover:bg-primary/80"
      >
        Reply
      </button>
    </form>
  );
}
