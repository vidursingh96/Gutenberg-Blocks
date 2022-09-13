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
import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { PanelBody, PanelRow } from '@wordpress/components';
import ImageUpload from '../components/ImageUpload';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

const InspectorControlPanel = ({ props }) => {
	return (
		<PanelBody
			title={__('Control Panel ⚙️')}
			initialOpen={true}
		>
			<PanelRow >
				<ImageUpload props={ props }/>
			</PanelRow>
		</PanelBody>
	)
}

export default function Edit(props) {
	const { attributes: { mediaURL } } = props;
	const backgroundURL = mediaURL ? mediaURL : "../../app/themes/realmdigital/public/images/banner-img.jpg";
	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<InspectorControlPanel props={props} />
			</InspectorControls>
			<section className="home-banner" style={{ "backgroundImage": "url(" + backgroundURL + ")" }} >
				<div className="banner-text">
					<div className="container">
						<InnerBlocks />
					</div>
				</div>
			</section>
		</div>
	);
}
