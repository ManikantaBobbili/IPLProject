package com.wecp.progressive.controller;

import com.wecp.progressive.entity.Vote;
// import com.wecp.progressive.service.VoteService;
import com.wecp.progressive.service.impl.VoteServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;
@RestController
@RequestMapping("/vote")
public class VoteController {

    @Autowired
    private VoteServiceImpl voteServiceImpl;

    
    // @Autowired
    // public VoteController(VoteService voteService) {
    //     this.voteServiceImpl = voteServiceImpl;
    // }

    @GetMapping
    public ResponseEntity<List<Vote>> getAllVotes() {
        List<Vote> votes = voteServiceImpl.getAllVotes();
        return new ResponseEntity<List<Vote>>(votes, HttpStatus.OK);

    }

    @PostMapping
    public ResponseEntity<Integer> createVote(Vote vote) {
        int id = voteServiceImpl.createVote(vote);
        return new ResponseEntity<Integer>(id, HttpStatus.CREATED);
    }

    // Each key (k) represents a category (categories - “Team”, “Batsman”, “Bowler”, “All-rounder” and “Wicketkeeper”)
    // and each value (v) represents the total number of votes for that category.
    @GetMapping("/count")
    public ResponseEntity<Map<String, Long>> getVotesCountOfAllCategories() {
        Map<String,Long> countMap = voteServiceImpl.getVotesCountOfAllCategories();
        return new ResponseEntity<Map<String,Long>>(countMap, HttpStatus.OK);
    }
}
