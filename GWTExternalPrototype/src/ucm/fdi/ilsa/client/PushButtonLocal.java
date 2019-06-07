package ucm.fdi.ilsa.client;

import java.util.HashMap;
import java.util.HashSet;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.PushButton;

import fdi.ucm.server.interconect.model.StructureJSON;

public class PushButtonLocal extends PushButton {

	private LabelTerm TermLabe;
	private CompositeDocumentEditionProto Padre;
	private StructureJSON Docum;

	public PushButtonLocal(CompositeDocumentEditionProto medicalPrototipeILSAMain, StructureJSON structureJSON) {
		super(new Image("Proto/cancel.png"));
		setWidth(25+"px");
		setHeight(27+"px");
		setTitle(StringConstants.getInstance().get("disablelocal"));
		Padre=medicalPrototipeILSAMain;
		Docum=structureJSON;
		addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent arg0) {
				
				if (Docum!=null)
					Docum.setSelectedValue(true);
				
//				StructureJSON Delete=Termino_Delete.get(Docum);
//				
//				
//				HashSet<String> Dele = Padre.getEstado().getDoc_Words_State().get(Docum);
//				if (Dele==null)
//					Dele=new HashSet<String>();
//				Dele.add(TermLabe.getTermio().getTerm());
//				Padre.getEstado().getDoc_Words_State().put(Docum, Dele);
				
				
				Padre.RefreshStatus();
				
				
			}
		});
	}

}
