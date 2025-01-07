package com.wecp.progressive.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import com.wecp.progressive.entity.Vote;
import com.wecp.progressive.repository.VoteRepository;
import com.wecp.progressive.service.VoteService;

public class VoteServiceImpl implements VoteService {

    @Autowired
    private VoteRepository voteRepository;

    @Override
    public List<Vote> getAllVotes() {
        return voteRepository.findAll();
    }

    @Override
    public int createVote(Vote vote) {
        return voteRepository.save(vote).getVoteId();
    }

    @Override
    public Map<String, Long> getVotesCountOfAllCategories() {
        return null;
    }

    

}