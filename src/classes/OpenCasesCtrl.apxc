public class OpenCasesCtrl {
	@AuraEnabled
    public static Integer getCaseCount()
    {
        return[SELECT COUNT() FROM Case WHERE Status != 'Closed'];
    }
}