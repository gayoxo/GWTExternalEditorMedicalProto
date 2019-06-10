/**
 * 
 */
package ucm.fdi.ilsa.client;

/**
 * @author Joaquin Gayoso-Cabada
 *
 */
public class CompositeDocumentDescriptionProto extends CompositeDocumentEditionProto{


	

	public CompositeDocumentDescriptionProto(String randomIdVars, Long contextId, int Height, boolean CompleteView,boolean Grammar, boolean views2) {
		
		super(randomIdVars,contextId,Height,Grammar);

		
	}

	@Override
	protected boolean EditorMode() {
		return false;
	}
	
}