package com.wecp.progressive.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wecp.progressive.entity.Vote;
import com.wecp.progressive.repository.VoteRepository;
import com.wecp.progressive.service.VoteService;
@Service
public class VoteServiceImpl implements VoteService {

    @Autowired
    private VoteRepository voteRepository;

    @Autowired
    public VoteServiceImpl(VoteRepository voteRepository){
        this.voteRepository=voteRepository;
    }

    @Override
    public List<Vote> getAllVotes() {
        return voteRepository.findAll();
    }

    @Override
    public int createVote(Vote vote) {
        return voteRepository.save(vote).getVoteId();
    }

    @Override
    public Map<String, Long> getVotesCountOfAllCategories(){
        Map<String,Long> count = new HashMap<>();
        count.put("Team", voteRepository.countByCategory("Team"));
        count.put("Batsman", voteRepository.countByCategory("Batsman"));
        count.put("Bowler", voteRepository.countByCategory("Bowler"));
        count.put("All-rounder", voteRepository.countByCategory("All-rounder"));
        count.put("Wicketkeeper", voteRepository.countByCategory("Wicketkeeper"));
        return count;
        
    }
}