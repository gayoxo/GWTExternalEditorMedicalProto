package ucm.fdi.ilsa.client;

import java.util.List;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.PushButton;

import fdi.ucm.server.interconect.model.StructureJSON;


public class PushButtonDeleteManual extends PushButton {

//	private TermProcesado TermLabe;
	private CompositeDocumentEditionProto Padre;
	private StructureJSON Docum;
	
	public PushButtonDeleteManual(TermProcesado labe, CompositeDocumentEditionProto medicalPrototipeILSAMain, StructureJSON docu) {
		super(new Image("Proto/cancel.png"));
		setWidth(25+"px");
		setHeight(27+"px");
//		TermLabe=labe;
		Padre=medicalPrototipeILSAMain;
		Docum=docu;
		addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent arg0) {
				
				Docum.setValue("");
				
				StructureJSON DeleteS=Padre.getTermino_Delete().get(Docum);
				StructureJSON CUIS=Padre.getTermino_CUI().get(Docum);
				List<StructureJSON> SemansS=Padre.getTermino_Seman().get(Docum);
          		List<StructureJSON> PositionS=Padre.getTermino_Posicion().get(Docum);
				
          		if (PositionS!=null)
	       			 for (int i = 0; i < PositionS.size(); i++) 
	       					 PositionS.get(i).setValue("");

          		if (DeleteS!=null)
          			 DeleteS.setSelectedValue(false);
          		
          		if (CUIS!=null)
          				CUIS.setValue("");
          		
          		if (SemansS!=null)
	       			 for (int i = 0; i < SemansS.size(); i++) 
	       				SemansS.get(i).setValue("");
          		
//				List<TermProcesado> Dele = Padre.getEstado().getDoc_Words_State_Add().get(Docum);
//				if (Dele==null)
//					Dele=new LinkedList<TermProcesado>();
//				Dele.remove(TermLabe);
//				Padre.getEstado().getDoc_Words_State_Add().put(Docum, Dele);
          		
				Padre.RefreshStatus();
				
				
				
			}
		});
	}
}
