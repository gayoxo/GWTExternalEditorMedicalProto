package ucm.fdi.ilsa.client;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.PushButton;

import fdi.ucm.server.interconect.model.StructureJSON;

public class PushButtonRecoberLocal extends PushButton {

//	private LabelTerm TermLabe;
	private CompositeDocumentEditionProto Padre;
	private StructureJSON Docum;

	public PushButtonRecoberLocal(LabelTerm labe, CompositeDocumentEditionProto medicalPrototipeILSAMain, StructureJSON docu) {
		super(new Image("Proto/add1.png"));
		setWidth(25+"px");
		setHeight(27+"px");
//		TermLabe=labe;
		Padre=medicalPrototipeILSAMain;
		Docum=docu;
		addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent arg0) {
				
				if (Docum!=null)
					Docum.setSelectedValue(false);
				
//				HashSet<String> Dele = Padre.getEstado().getDoc_Words_State().get(Docum);
//				if (Dele==null)
//					Dele=new HashSet<String>();
//				Dele.remove(TermLabe.getTermio().getTerm());
//				Padre.getEstado().getDoc_Words_State().put(Docum, Dele);
				
				Padre.RefreshStatus();
			}
		});
	}

}
