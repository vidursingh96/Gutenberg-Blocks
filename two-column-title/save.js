/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import HeadingContent from '../components/HeadingContent';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
	const { attributes: { headingContent, blurb, headingTag, rightHeadingContent } } = props;
	const blockProps = useBlockProps.save({
		className: "who-we-are"
	});

	return (
		<section {...blockProps} >
			<div className="container">
				<div className="row-wrap">
					<div className="left-block">
						<div className="txt-wrapper">
							<HeadingContent headingContent={headingContent} headingTag={headingTag} />
							<div className="content">
								<RichText.Content
									tagName="p"
									value={blurb}
									onChange={(blurb) => setAttributes({ blurb })}
									placeholder={__('Blurb...')}
									multiline="p"
								/>
							</div>
						</div>
					</div>
					<div className="right-block">
						<RichText.Content
							tagName="h2"
							value={rightHeadingContent}
							onChange={(rightHeadingContent) => setAttributes({ rightHeadingContent })}
							placeholder={__('Title...')}
							className="section-title"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
