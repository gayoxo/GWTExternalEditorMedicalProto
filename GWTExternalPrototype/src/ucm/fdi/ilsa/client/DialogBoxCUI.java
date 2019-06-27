package ucm.fdi.ilsa.client;

import java.util.LinkedList;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.DockLayoutPanel;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HasVerticalAlignment;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ScrollPanel;
import com.google.gwt.user.client.ui.VerticalPanel;


public class DialogBoxCUI extends DialogBox {

	private static final String ASOCCCIA = "Associated Semantic Types:";
	private static final String DESCTERM = "Description of Term:";
	private static final String CLOSE = "Close";
	private TermInfo CUI;

	public DialogBoxCUI(TermInfo cui) {
		super(true);
		setGlassEnabled(true);
		setModal(true);
		CUI=cui;
		//setSize(Window.getClientWidth()/10+"px", Window.getClientHeight()/10+"px");
		addStyleName("dialogCUI");
		
		
		DockLayoutPanel dockLayoutPanel = new DockLayoutPanel(Unit.PX);
		setWidget(dockLayoutPanel);
		
		dockLayoutPanel.setSize(Window.getClientWidth()/2+"px", Window.getClientHeight()/2+"px");
		dockLayoutPanel.addStyleName("dialog");
		
		
		VerticalPanel VPCentrado=new VerticalPanel();
		VPCentrado.setVerticalAlignment(HasVerticalAlignment.ALIGN_MIDDLE);
		VPCentrado.setHorizontalAlignment(HasHorizontalAlignment.ALIGN_CENTER);
		dockLayoutPanel.addSouth(VPCentrado,30);
		
		HorizontalPanel HPCentrado=new HorizontalPanel();
		VPCentrado.add(HPCentrado);
		HPCentrado.setVerticalAlignment(HasVerticalAlignment.ALIGN_MIDDLE);
		HPCentrado.setHorizontalAlignment(HasHorizontalAlignment.ALIGN_CENTER);
		
		Button close= new Button(CLOSE);
		HPCentrado.add(close);
		close.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent arg0) {
				hide();
			}
		});
		
		
		VerticalPanel VP=new VerticalPanel();
		VP.addStyleName("VPdialogCUI");
		
		ScrollPanel SP=new ScrollPanel();
		dockLayoutPanel.add(SP);
		SP.setWidget(VP);
		
		VerticalPanel VPSem=new VerticalPanel();
		VPSem.addStyleName("VPSeman");
		VP.add(VPSem);
		Label L = new Label(ASOCCCIA);
		L.addStyleName("semanticaLabel");
		VPSem.add(L);
		VerticalPanel VPSemHijos=new VerticalPanel();
		VPSem.add(VPSemHijos);
		VPSemHijos.addStyleName("semanticaLabelNames");
		for (String semantica : CUI.getSemanticTypes())
		{
			Label LSem = new Label(semantica);
			LSem.addStyleName("semanticaLabelValue");
			VPSemHijos.add(LSem);
		}
		
		

		VerticalPanel VPSemDesc=new VerticalPanel();
		VPSemDesc.addStyleName("VPSeman");
		VP.add(VPSemDesc);
		
		LinkedList<String> Descriptors= new LinkedList<String>(cui.getDescripciones().keySet());
		
		Label LDesc = new Label(DESCTERM);
		LDesc.addStyleName("semanticaLabelDescriptors");
		VPSemDesc.add(LDesc);
		
		VerticalPanel VPSemHijosDesc=new VerticalPanel();
		VPSemDesc.add(VPSemHijosDesc);
		VPSemHijosDesc.addStyleName("semanticaLabelDescSons");
		
		for (int i = 0; i < Descriptors.size(); i++) {
			
			VerticalPanel VPSemHijosDescEle=new VerticalPanel();
			VPSemHijosDesc.add(VPSemHijosDescEle);
			VPSemHijosDescEle.addStyleName("semanticaLabelDescSonsElem");
			
			String Valor = Descriptors.get(i);
			Label LSem = new Label(Valor);
			LSem.addStyleName("semanticaLabelValue");
			VPSemHijosDescEle.add(LSem);
			
			String ValorD = cui.getDescripciones().get(Valor);
			if (ValorD!=null&&!ValorD.isEmpty())
			{
			Label LSemD = new Label(ValorD);
			LSemD.addStyleName("semanticaLabelValueDes");
			VPSemHijosDescEle.add(LSemD);
			}
		}
		
	
		
		
		

	}

}
