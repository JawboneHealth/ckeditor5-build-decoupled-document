import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import printJS from 'print-js';
import printerIcon from './printer-icon.svg';

class Print extends Plugin {
	init() {
		const editor = this.editor;

		editor.ui.componentFactory.add( 'print', locale => {
			const view = new ButtonView( locale );

			view.set( {
				label: 'Print',
				icon: printerIcon,
				tooltip: true,
			} );

			view.on( 'execute', () => {
				const data = editor.getData();
				printJS( {
					printable: data,
					type: 'raw-html',
					targetStyles: [ '*' ],
				} );
			} );

			return view;
		} );
	}
}

export default Print;
