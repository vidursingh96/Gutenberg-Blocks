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
import { BlockControls, InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor'

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss'
import { Toolbar, ToolbarGroup } from '@wordpress/components'

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
    const {
        attributes: { headingContent, blurb, headingTag },
        setAttributes,
    } = props
    const ALLOWED_BLOCKS = ['realmdigital/button', 'realmdigital/list', 'realmdigital/contact-info']

    return (
        <div {...useBlockProps()}>
            <div className="txt-wrapper">
                <BlockControls>
                    <Toolbar label={__('Change heading tag', 'text-domain')}>
                        <ToolbarGroup
                            isCollapsed={true}
                            controls={[
                                {
                                    tag: 'h1',
                                    label: __('Heading 1', 'text-domain'),
                                },
                                {
                                    tag: 'h2',
                                    label: __('Heading 2', 'text-domain'),
                                },
                                {
                                    tag: 'h3',
                                    label: __('Heading 3', 'text-domain'),
                                },
                                {
                                    tag: 'h4',
                                    label: __('Heading 4', 'text-domain'),
                                },
                                {
                                    tag: 'h5',
                                    label: __('Heading 5', 'text-domain'),
                                },
                                {
                                    tag: 'h6',
                                    label: __('Heading 6', 'text-domain'),
                                },
                            ].map(tag => {
                                return {
                                    title: tag.label,
                                    isActive: headingTag === tag.tag,
                                    onClick: () => setAttributes({ headingTag: tag.tag }),
                                }
                            })}
                        />
                    </Toolbar>
                </BlockControls>
                <RichText
                    tagName={headingTag}
                    value={headingContent}
                    onChange={headingContent => setAttributes({ headingContent })}
                    placeholder={__('Heading...')}
                />
                <RichText
                    tagName="p"
                    value={blurb}
                    onChange={blurb => setAttributes({ blurb })}
                    placeholder={__('Blurb...')}
                />
            </div>
            <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
        </div>
    )
}
