#/usr/bin/env python3.8
class Account_LOL:
    def __init__(self, name_account, level, rank, division):
        '''rank should be a number (int) from 0 (iron) to 8 (Challenger)
           division is an int from 4 to 1'''
        self.name = name_account
        self.level = level
        self.rank = rank
        self.division = division
        #self.generalAccount = Account_RiotGames(), variables que siempre van a ser creadas con el mismo valor, y puedo
        #Usar POO para asignarlo a otra clase (de las cuentas generales de todo Riot Games y todos sus juegos)
    def queue_even_elo(self, another_account):
        '''This fuction check if two different accounts can play together (even elo)
        another_account is an object of another account
        this function returns true or false'''
        #They are able to play if the difference is a whole rank
        if self.rank - another_account.rank < 2 and self.rank - another_account.rank > -2:
            return True
        else: return False

if __name__ == '__main__':
    tanti = Account_LOL('Poro Buenote', 201, 3,2)
    alejo = Account_LOL('Poro Malote', 232, 5,3)
    print(tanti.queue_even_elo(alejo))

