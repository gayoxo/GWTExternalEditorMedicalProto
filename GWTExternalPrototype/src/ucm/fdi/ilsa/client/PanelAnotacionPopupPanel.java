/**
 * 
 */
package ucm.fdi.ilsa.client;

import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.DockLayoutPanel;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.RichTextArea;
import com.google.gwt.user.client.ui.VerticalPanel;

import fdi.ucm.server.interconect.model.StructureJSON;


/**
 * @author Joaquin Gayoso-Cabada
 *
 */
public class PanelAnotacionPopupPanel extends DialogBox {

	private RichTextArea richTextArea;
	private StructureJSON Estado;

	public PanelAnotacionPopupPanel(StructureJSON estado) {
		
		super(true);
		setText("Annotatio");
		setGlassEnabled(false);
		setModal(true);
		DockLayoutPanel PanelBase=new DockLayoutPanel(Unit.PX);
		PanelBase.setSize("664px", "425px");
		PanelBase.addStyleName("annotatorStyle");
		Estado=estado;
		setWidget(PanelBase);
		
		Button Close=new Button(StringConstants.getInstance().get("close"));
		HorizontalPanel Botonera=new HorizontalPanel();
		Botonera.addStyleName("botoneraAnotador");
		PanelBase.addSouth(Botonera, 45);
		
		Botonera.add(Close);
		Close.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent arg0) {
				if (!richTextArea.getText().trim().isEmpty())
					Estado.setValue(richTextArea.getText().trim());
				else
					Estado.setValue("");
				
				hide();
			}
		});
		
		
		String TextoAnotacion="";
		VerticalPanel verticalPanel2=new VerticalPanel();
		
		if (Estado.getValue().trim()!=null)
			TextoAnotacion=Estado.getValue().trim();
		
		richTextArea = new RichTextArea();
		
		richTextArea.setHTML(TextoAnotacion);
		RichTextToolbar toolbar = new RichTextToolbar(richTextArea);
		
		verticalPanel2.add(toolbar);
		verticalPanel2.add(richTextArea);
		richTextArea.setSize("100%", "300px");
		
		PanelBase.add(verticalPanel2);
		
		
	}

}
