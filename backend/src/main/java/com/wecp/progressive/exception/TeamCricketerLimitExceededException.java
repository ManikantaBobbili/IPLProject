package com.wecp.progressive.exception;

import java.sql.SQLException;

public class TeamCricketerLimitExceededException extends SQLException {
    public TeamCricketerLimitExceededException(String m){
        super(m);
    }
}