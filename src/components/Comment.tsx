import { useState } from 'react';
import { getTimeDifference } from '../helpers';
import transofrmHTMLtoText from '../helpers/sanitizeHtml';
import { Item } from '../types/Item.interface';
import { SubCommentList } from './SubCommentsList';

type CommentProps = {
	comment: Item;
};

export const Comment = ({ comment }: CommentProps): JSX.Element => {
	const [isSubCommentsOpened, setIsSubCommentsOpened] = useState(false);
	const publishTime = getTimeDifference(comment?.time ?? 0);
	const commentText = transofrmHTMLtoText(comment?.text ?? '');

	const handleSubCommentsVisible = (): void => {
		setIsSubCommentsOpened((prev) => !prev);
	};

	return (
		<div className="flex items-center space-x-4 p-4">
			{comment && (
				<div>
					{comment.text && !comment?.deleted && (
						<div
							// eslint-disable-next-line react/no-danger
							dangerouslySetInnerHTML={{ __html: commentText }}
						/>
					)}
					{comment?.deleted && <span>Deleted</span>}
					<div className="flex space-x-1.5 text-xs text-gray-500">
						{!comment.deleted && <span>by {comment?.by}</span>}
						<span>{publishTime}</span>
						{comment.kids && comment.kids.length > 0 && (
							<button
								type="button"
								className="hover:underline cursor-pointer"
								onClick={handleSubCommentsVisible}
							>
								{!isSubCommentsOpened ? (
									<>{comment.kids.length} more</>
								) : (
									<>hide</>
								)}
							</button>
						)}
					</div>
					{isSubCommentsOpened && comment.kids && (
						<SubCommentList commentsIds={comment.kids} />
					)}
				</div>
			)}
		</div>
	);
};
