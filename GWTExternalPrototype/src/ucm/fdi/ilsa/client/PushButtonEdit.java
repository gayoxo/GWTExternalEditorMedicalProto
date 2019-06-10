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

import fdi.ucm.server.interconect.model.StructureJSON;


public class PushButtonEdit extends PushButton {

	private LabelTerm TermLabe;
	private CompositeDocumentEditionProto Padre;
	private StructureJSON Docum;
	
	public PushButtonEdit(LabelTerm labe, CompositeDocumentEditionProto medicalPrototipeILSAMain, StructureJSON structTerm) {
		super(new Image("Proto/edit.png"));
		setWidth(25+"px");
		setHeight(27+"px");
		setTitle(StringConstants.getInstance().get("edittit"));
		TermLabe=labe;
		Padre=medicalPrototipeILSAMain;
		Docum=structTerm;
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
				
			}
		});
	}

	/*
	protected boolean processAddTerm() {
		List<TermProcesado> actuales = Padre.getEstado().getDoc_Words_State_Add().get(Docum);
		if (actuales==null)
			actuales=new LinkedList<TermProcesado>();
		
		
		
		boolean found=false;
		for (TermProcesado termino : actuales) {
			if (termino.getTerm().equals(TermLabe.getTermio().getTerm()))
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
		{
		
			HashSet<Integer> INteLis=new HashSet<Integer>();
			
			for (Label labe : Padre.getActualSelected()) {
				Integer a = Padre.getPosicionTabla().get(labe);
				if (a!=null)
					INteLis.add(a);
			}	
			
			if (INteLis.isEmpty())
				{
				Window.alert(StringConstants.getInstance().get("selectionempty"));
				return false;
				}
			else
			{	
			TermProcesado Nuevo=new TermProcesado(TermLabe.getTermio().getTerm(), INteLis);
			Nuevo.setCUI(TermLabe.getTermio().getCUI());
			Nuevo.setSemantica(TermLabe.getTermio().getSemantica());
			actuales.add(Nuevo);
			Padre.getEstado().getDoc_Words_State_Add().put(Docum,actuales);
			return true;
			}
		}
		
	}
	*/
}
