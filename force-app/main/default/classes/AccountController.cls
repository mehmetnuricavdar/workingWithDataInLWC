public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        List<Account> accounts = [
            SELECT Name, AnnualRevenue, Industry
            FROM Account
            WITH SECURITY_ENFORCED
            ORDER BY Name
        ];
        if(accounts.isEmpty()){
            throw new AuraHandledException('No accounts found');
        }
        return accounts;
    }
}
