import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Team } from "../types/Team";
import { Cricketer } from "../types/Cricketer";
import { Match } from "../types/Match";
import { Vote } from "../types/Vote";
import { TicketBooking } from "../types/TicketBooking";


@Injectable({
  providedIn: "root",
})
export class IplService {
  private baseUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  //Backend API calls of Team
  
  addTeam(team: Team): Observable<Team> {
    // Implementation goes here
    return this.http.post<Team>(this.baseUrl+"/team/",team);
  }

  updateTeam(team: Team): Observable<Team> {
    // Implementation goes here
    return this.http.put<Team>(this.baseUrl+"/team/"+team.teamId,team);
  }

  deleteTeam(teamId: number): Observable<any> {
    // Implementation goes here
    return this.http.delete<any>(this.baseUrl+"/team/"+teamId);
  }

  getAllTeams(): Observable<Team[]> {
    // Implementation goes here
    return this.http.get<Team[]>(this.baseUrl+"/team");
  }

  getTeamById(teamId: number): Observable<Team> {
     // Implementation goes here
     return this.http.get<Team>(this.baseUrl+"/team/"+teamId);
  }


  //Backend API calls of Cricketer

  addCricketer(cricketer: Cricketer): Observable<Cricketer> {
    // Implementation goes here
    return this.http.post<Cricketer>(this.baseUrl+"/cricketer",cricketer);
  }

  updateCricketer(cricketer: Cricketer): Observable<Cricketer> {
    // Implementation goes here
    return this.http.put<Cricketer>(this.baseUrl+"/cricketer/"+cricketer.cricketerId,cricketer);
  }

  deleteCricketer(cricketerId: number): Observable<any> {
    // Implementation goes here
    return this.http.delete<any>(this.baseUrl+"/cricketer/"+cricketerId);
  }

  getAllCricketers(): Observable<Cricketer[]> {
    // Implementation goes here
    return this.http.get<Cricketer[]>(this.baseUrl+"/cricketer");
  }

  getCricketerById(cricketerId: number): Observable<Cricketer> {
     // Implementation goes here
     return this.http.get<Cricketer>(this.baseUrl+"/cricketer/"+cricketerId);
  }

  getCricketersByTeam(teamId: number): Observable<Cricketer[]> {
    // Implementation goes here
    return this.http.get<Cricketer[]>(this.baseUrl+"/cricketer/team/"+teamId);
  }

  //Backend API calls of Match

  addMatch(match: Match): Observable<Match> {
    // Implementation goes here
    return this.http.post<Match>(this.baseUrl+"/match",match);
  }

  updateMatch(match: Match): Observable<Match> {
    // Implementation goes here
    return this.http.put<Match>(this.baseUrl+"/match/"+match.matchId,match);
  }

  deleteMatch(matchId: number): Observable<any> {
    // Implementation goes here
    return this.http.delete<any>(this.baseUrl+"/match/"+matchId);
  }

  getAllMatches(): Observable<Match[]> {
    // Implementation goes here
    return this.http.get<Match[]>(this.baseUrl+"/match");
  }

  getMatchById(matchId: number): Observable<Match> {
     // Implementation goes here
     return this.http.get<Match>(this.baseUrl+"/match/"+matchId);
  }

  getAllMatchesByStatus(status: string): Observable<Match[]> {
    // Implementation goes here
    return this.http.get<Match[]>(this.baseUrl+"/match/status/"+status);
  }

  //Backend API calls of Vote

  getAllVotes(): Observable<Vote[]> {
    // Implementation goes here
    return this.http.get<Vote[]>(this.baseUrl+"/vote");
  }
  
  createVote(vote: Vote): Observable<Vote> {
    // Implementation goes here
    return this.http.post<Vote>(this.baseUrl+"/vote",vote);
  }
  
  getVotesCountOfAllCategories(): Observable<Map<string, number>> {
    // Implementation goes here
    return this.http.get<Map<string,number>>(this.baseUrl+"/vote/count");
  }

  //Backend API calls of TicketBooking

  getAllTicketBookings(): Observable<TicketBooking[]> {
    // Implementation goes here
    return this.http.get<TicketBooking[]>(this.baseUrl+"/ticket");
  }
    
  createBooking(ticketBooking: TicketBooking): Observable<TicketBooking> {
    // Implementation goes here
    return this.http.post<TicketBooking>(this.baseUrl+"/ticket",ticketBooking);
  }
    
  cancelBooking(bookingId: number): Observable<any> {
    // Implementation goes here
    return this.http.delete<any>(this.baseUrl+"/ticket/"+bookingId);
  }

  getBookingsByUserEmail(email: string): Observable<TicketBooking[]> {
    // Implementation goes here
    return this.http.get<TicketBooking[]>(this.baseUrl+"/ticket/user/"+email)
  }
}
