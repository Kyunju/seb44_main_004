package com.seb_main_004.whosbook.curation.dto;

import com.seb_main_004.whosbook.curation.entity.Curation;
import com.seb_main_004.whosbook.member.dto.CuratorResponseDto;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Builder
@Getter
public class CurationSingleDetailResponseDto {
    private CuratorResponseDto curator;
    private long categoryId;
    private String category;
    private Boolean isLiked;
    private Boolean isSubscribed;
    private int curationLikeCount;
    private long curationId;
    private String emoji;
    private String title;
    private String content;
    private List<Long> imageIds;
    private Curation.Visibility visibility;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
