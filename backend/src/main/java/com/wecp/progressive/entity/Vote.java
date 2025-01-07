package com.wecp.progressive.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Vote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int voteId;
    private String email;
    private String category;
    @OneToOne
    private Cricketer cricketer;
    @OneToOne
    private Team team;
    public Vote() {
    }
    public Vote(int voteId, String email, String category, Cricketer cricketer, Team team) {
        this.voteId = voteId;
        this.email = email;
        this.category = category;
        this.cricketer = cricketer;
        this.team = team;
    }
    public int getVoteId() {
        return voteId;
    }
    public void setVoteId(int voteId) {
        this.voteId = voteId;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }
    public Cricketer getCricketer() {
        return cricketer;
    }
    public void setCricketer(Cricketer cricketer) {
        this.cricketer = cricketer;
    }
    public Team getTeam() {
        return team;
    }
    public void setTeam(Team team) {
        this.team = team;
    }
    

}