package com.wecp.progressive.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
// import javax.persistence.OneToOne;

// import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class TicketBooking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookingId;
    // private int matchId;

    @ManyToOne(cascade = CascadeType.ALL)
    private Match match;
    private String email;
    private int numberOfTickets;
    public TicketBooking() {
    }
    public TicketBooking(int bookingId, Match match, String email, int numberOfTickets) {
        this.bookingId = bookingId;
        // this.matchId = matchId;
        this.match = match;
        this.email = email;
        this.numberOfTickets = numberOfTickets;
    }
    public int getBookingId() {
        return bookingId;
    }
    
    public void setBookingId(int bookingId) {
        this.bookingId = bookingId;
    }
    // public int getMatchId() {
    //     return matchId;
    // }
    // public void setMatchId(int matchId) {
    //     this.matchId = matchId;
    // }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public int getNumberOfTickets() {
        return numberOfTickets;
    }
    public void setNumberOfTickets(int numberOfTickets) {
        this.numberOfTickets = numberOfTickets;
    }
    public Match getMatch() {
        return match;
    }
    public void setMatch(Match match) {
        this.match = match;
    }

    

}