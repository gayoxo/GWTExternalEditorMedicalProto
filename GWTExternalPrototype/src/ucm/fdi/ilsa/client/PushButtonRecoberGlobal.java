package ucm.fdi.ilsa.client;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.PushButton;

public class PushButtonRecoberGlobal extends PushButton {

	private LabelTerm TermLabe;
	private CompositeDocumentEditionProto Padre;

	public PushButtonRecoberGlobal(LabelTerm labe, CompositeDocumentEditionProto medicalPrototipeILSAMain) {
		super(new Image("img/add1.png"));
		setWidth(25+"px");
		setHeight(27+"px");
		TermLabe = labe;
		Padre = medicalPrototipeILSAMain;
		addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent arg0) {
				
				
				
				
				
//				Padre.getEstado().getDoc_Words_State_Global().remove(TermLabe.getTermio().getTerm());
//				Padre.RefreshStatus();
				
			}
		});
	}

}
