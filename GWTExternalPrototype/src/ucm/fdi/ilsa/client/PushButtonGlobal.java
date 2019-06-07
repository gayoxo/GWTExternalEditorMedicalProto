package ucm.fdi.ilsa.client;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.PushButton;

public class PushButtonGlobal extends PushButton {

	private LabelTerm TermLabe;
	private CompositeDocumentEditionProto Padre;

	public PushButtonGlobal(LabelTerm labe, CompositeDocumentEditionProto medicalPrototipeILSAMain) {
		super(new Image("img/delete1.png"));
		setTitle(StringConstants.getInstance().get("disableglobal"));
		setWidth(25+"px");
		setHeight(27+"px");
		TermLabe=labe;
		Padre=medicalPrototipeILSAMain;
		addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent arg0) {
				
				Window.alert("Al padre");
//				Padre.getEstado().getDoc_Words_State_Global().add(TermLabe.getTermio().getTerm());
//				Padre.RefreshStatus();
				
			}
		});
	}
}
