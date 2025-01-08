package com.wecp.progressive.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.wecp.progressive.entity.Vote;
@Repository
public interface VoteRepository extends JpaRepository<Vote,Integer> {

    // @Query("SELECT v.category, COUNT(category) FROM Vote v GROUP BY v.category")
    // Map<String,Long> findVotesCountByCategory();

    Long countByCategory(String category);

    //@Query("DELETE v FROM Vote v WHERE v.teamId = :teamId")
    // void deleteByTeamId(int teamId);

    @Query("DELETE FROM Vote v WHERE v.team.id = :teamId")
    void deleteByTeamId(int teamId);
 
    @Query("DELETE FROM Vote v WHERE v.cricketer.id = :cricketerId")
    void deleteByCricketerId(int cricketerId);
    
    // void deleteByCricketerId(int cricketerId);
    
}
