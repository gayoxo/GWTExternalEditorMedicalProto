package ucm.fdi.ilsa.client;

import java.util.HashMap;
import java.util.LinkedList;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.MouseOutEvent;
import com.google.gwt.event.dom.client.MouseOutHandler;
import com.google.gwt.event.dom.client.MouseOverEvent;
import com.google.gwt.event.dom.client.MouseOverHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Label;

//import ucm.fdi.ilsa.prototype.shared.TermInfo;
//import ucm.fdi.ilsa.prototype.shared.TermProcesado;

public class LabelTerm extends Label {

	private TermProcesado Termio;
	private LinkedList<Label> ActualTMPSelected;
	private CompositeDocumentEditionProto ActualSelected;
//	private final static MedicalPrototypeServiceAsync medialService = GWT.create(MedicalPrototypeService.class);

	public LabelTerm(TermProcesado termProcc, CompositeDocumentEditionProto medicalPrototipeILSAMain) {
		super(termProcc.getTerm());
		Termio=termProcc;
		ActualSelected=medicalPrototipeILSAMain;
		ActualTMPSelected=new LinkedList<Label>();
		
		HashMap<Integer, Label> lista=ActualSelected.getLabelsByPos();
		for (Integer posi : Termio.getPosiciones()) {
			Label sele=lista.get(posi);
			if (sele!=null)
				ActualTMPSelected.add(sele);
		}
		
		addMouseOverHandler(new MouseOverHandler() {
			
			@Override
			public void onMouseOver(MouseOverEvent arg0) {
				for (Label widget : ActualSelected.getActualSelected()) 
					widget.removeStyleName("selectedLab");

				for (Label label : ActualTMPSelected)
					label.addStyleName("selectedLabMarked");
				
				
			}
		});
		
		addMouseOutHandler(new MouseOutHandler() {
			
			@Override
			public void onMouseOut(MouseOutEvent arg0) {
				for (Label label : ActualTMPSelected) 
					label.removeStyleName("selectedLabMarked");
				
				for (Label widget : ActualSelected.getActualSelected()) 
					widget.addStyleName("selectedLab");
				
			}
		});
		
		StringBuffer SBTitle=new StringBuffer();
		
		for (int i = 0; i < Termio.getSemantica().size(); i++) {
			String label = Termio.getSemantica().get(i);
			SBTitle.append(label);
			if (i < Termio.getSemantica().size()-1)
				SBTitle.append("\n");
		}
		
		addMouseOverHandler(new MouseOverHandler() {
			
			@Override
			public void onMouseOver(MouseOverEvent arg0) {
				for (Label widget : ActualSelected.getActualSelected()) 
					widget.removeStyleName("selectedLab");

				for (Label label : ActualTMPSelected)
					label.addStyleName("selectedLabMarked");
				
				
			}
		});
		
		setTitle(SBTitle.toString());
		
		addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent arg0) {

				Window.alert("llamada a servicio externo UMLS");
//				if (Termio.getCUI()!=null&&!Termio.getCUI().isEmpty())
//				{
//				LoadingPopupPanel.getInstance().setLabelTexto(
//						StringConstants.getInstance().get("Loading"));
//				LoadingPopupPanel.getInstance().center();
//				medialService.getTermInfo(Termio.getCUI(), new AsyncCallback<TermInfo>() {
//					
//					@Override
//					public void onSuccess(TermInfo arg0) {
//						LoadingPopupPanel.getInstance().hide();
//						DialogBox DB=new DialogBoxCUI(arg0);
//						DB.center();
//						
//					}
//					
//					@Override
//					public void onFailure(Throwable arg0) {
//						LoadingPopupPanel.getInstance().hide();
//						Window.alert(arg0.getMessage());
//					}
//				});
				
//				}
			}
		});
	}
	
	public TermProcesado getTermio() {
		return Termio;
	}

}
