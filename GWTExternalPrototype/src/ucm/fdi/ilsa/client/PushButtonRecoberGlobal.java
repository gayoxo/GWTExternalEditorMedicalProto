package ucm.fdi.ilsa.client;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.http.client.Request;
import com.google.gwt.http.client.RequestBuilder;
import com.google.gwt.http.client.RequestCallback;
import com.google.gwt.http.client.RequestException;
import com.google.gwt.http.client.Response;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.PushButton;

public class PushButtonRecoberGlobal extends PushButton {

	private LabelTerm TermLabe;
	private CompositeDocumentEditionProto Padre;

	public PushButtonRecoberGlobal(LabelTerm labe, CompositeDocumentEditionProto medicalPrototipeILSAMain) {
		super(new Image("Proto/add1.png"));
		setWidth(25+"px");
		setHeight(27+"px");
		TermLabe = labe;
		Padre = medicalPrototipeILSAMain;
		addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent arg0) {
				
				RequestBuilder builder = new RequestBuilder(RequestBuilder.GET, ServerINFO.ServerURI+"ProtoEditorService/service/recoberDelete/"+Padre.getCollectionNumber()+"/?term="+TermLabe.getTermio().getTerm());

		        try {
		            builder.sendRequest(null, new RequestCallback() {
		                public void onError(Request request, Throwable exception) {
		                	Window.alert("Error ->"+exception.getMessage());
		                }

		                public void onResponseReceived(Request request, Response response) {
		                    if (response.getStatusCode()!=0&&response.getStatusCode()==200)
		                    	{
//		                    	 Window.alert(response.getText());
//		                    	 
		                    	 CompositeDocumentEditionProto.console(response.getText());
		                    	 
		                    	 Padre.RefreshStatus();
		                    	}
		                    else
		                    	Window.alert("Error ->"+response.getStatusCode());
		                }
		            });

		        } catch (RequestException e) {
		           e.printStackTrace();
		           Window.alert(e.getMessage());
		        }
				
				
				
//				Padre.getEstado().getDoc_Words_State_Global().remove(TermLabe.getTermio().getTerm());
//				Padre.RefreshStatus();
				
			}
		});
	}

}
