package com.wecp.progressive.exception;

import java.sql.SQLException;

public class NoMatchesFoundException extends SQLException {
   public NoMatchesFoundException(String m) {super(m);}
}