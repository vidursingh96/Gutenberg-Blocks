/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n'

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor'

import svgImage from './svgImage'
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
    const blockProps = useBlockProps.save({
        className: 'inner-page-banner services-banner animation-banner thank-you-banner',
    })

    return (
        <section {...blockProps}>
            <div className="container">
                <div className="row-wrap">
                    <div className="content-block">
                        <InnerBlocks.Content />
                    </div>
                </div>
                <div className="image-block" dangerouslySetInnerHTML={{ __html: svgImage }}></div>
            </div>
        </section>
    )
}
