package ucm.fdi.ilsa.client;

import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.PushButton;

import fdi.ucm.server.interconect.model.OperationalValueJSON;
import fdi.ucm.server.interconect.model.OperationalValueTypeJSON;
import fdi.ucm.server.interconect.model.StructureJSON;


public class PushButtonEdit extends PushButton {

	private LabelTerm TermLabe;
	private CompositeDocumentEditionProto Padre;
	private StructureJSON Docum;
	private OperationalValueTypeJSON SourceAutoBien;
	private LinkedList<StructureJSON> TermElements;
	private List<StructureJSON> Posiciones;
	
	public PushButtonEdit(LabelTerm labe, CompositeDocumentEditionProto medicalPrototipeILSAMain, StructureJSON structTerm, OperationalValueTypeJSON sourceAutoBien, LinkedList<StructureJSON> termElements, List<StructureJSON> posiciones) {
		super(new Image("Proto/edit.png"));
		setWidth(25+"px");
		setHeight(27+"px");
		setTitle(StringConstants.getInstance().get("edittit"));
		TermLabe=labe;
		Padre=medicalPrototipeILSAMain;
		Docum=structTerm;
		SourceAutoBien=sourceAutoBien;
		TermElements=termElements;
		Posiciones=posiciones;
		addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent arg0) {
				
				
				
				/**
				
				HashSet<String> Dele = Padre.getEstado().getDoc_Words_State().get(Docum);
				if (Dele==null)
					Dele=new HashSet<String>();
				Dele.add(TermLabe.getTermio().getTerm());
				
				if (processAddTerm())
				{
				Padre.getEstado().getDoc_Words_State().put(Docum, Dele);
				Padre.RefreshStatus();
				}

				*/
				
				
				
				
				boolean AutoCorrecto = true;
				for (OperationalValueJSON termProcesado : Docum.getOperationalValues()) {
					if (SourceAutoBien.getId().contains(termProcesado.getOperationalValueTypeId())&&!termProcesado.getValue().toLowerCase().equals("auto"))
					{
						AutoCorrecto=false;
						break;	
					}
				}
				
				if (AutoCorrecto&&processAddTerm())
					{
					
					HashSet<Integer> INteLis=new HashSet<Integer>();
					
					for (Label labe : Padre.getActualSelected()) {
						Integer a = Padre.getPosicionTabla().get(labe);
						if (a!=null)
							INteLis.add(a+1);
					}	
					
					if (INteLis.isEmpty())
						Window.alert(StringConstants.getInstance().get("selectionempty"));
					else
					{	
						
						OperationalValueJSON newV=	new OperationalValueJSON();
						newV.setType(SourceAutoBien.getId().get(0));
						newV.setValue("manual");
					Docum.getOperationalValues().add(newV);
					
					for (StructureJSON structureJSON : Posiciones) {
						structureJSON.setValue("");
					}
						
					
					if (INteLis.size()>Posiciones.size())
					{ 
						//TODO AQUI HAY QUE CRECER
					}
					
					
					LinkedList<Integer> INteLisList = new LinkedList<Integer>(INteLis);
					
					
					for (int i = 0; i < INteLisList.size(); i++) {
						Posiciones.get(i).setValue(Integer.toString(INteLisList.get(i)));
					}
					
					
					}
					
					
					
					}
				

				Padre.RefreshStatus();
				
			}
		});
	}

	
	protected boolean processAddTerm() {
		
		
		List<String> Term_Elements=new LinkedList<>();
		for (StructureJSON termelem : TermElements) {
			if (!termelem.getValue().trim().isEmpty())
			{
				
				
				boolean AutoCorrecto = true;
				for (OperationalValueJSON termProcesado : termelem.getOperationalValues()) {
					if (SourceAutoBien.getId().contains(termProcesado.getOperationalValueTypeId())&&!termProcesado.getValue().toLowerCase().equals("auto"))
					{
						AutoCorrecto=false;
						break;	
					}
				}
				
				if (!AutoCorrecto)
					Term_Elements.add(termelem.getValue().trim());
				
			}
		}
		

	
		
		boolean found=false;
		for (String termino : Term_Elements) {
			if (termino.equals(TermLabe.getTermio().getTerm()))
			{
			found=true;
			break;
			}
		}
		
		if (found)
			{
			Window.alert(StringConstants.getInstance().get("termexist"));
			return false;
			}
		else
			return true;

		
	}
	
}
